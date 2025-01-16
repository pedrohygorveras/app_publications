from drivers.webdriver_manager import WebDriverManager
from modules.scraping.filter_config import FilterConfigurator
from modules.scraping.data_extractor import DataExtractor
from datetime import datetime, timedelta
import requests

import requests
from datetime import datetime, timedelta

class WebScraperApp:
    def __init__(self, url, filters):
        self.url = url
        self.filters = filters
        self.driver = WebDriverManager().get_driver()
        self.configurator = FilterConfigurator(self.driver)
        self.extractor = DataExtractor(self.driver)

    def quit(self):
        if self.driver:
            try:
                self.driver.quit()
            except Exception as e:
                print(f"Error while quitting the driver: {e}")
            finally:
                self.driver = None

    def post_to_api(self, record):
        endpoint = "https://backend.pedrohygorveras.ip-ddns.com/publication/"
        try:
            response = requests.post(
                endpoint,
                headers={
                    "accept": "*/*",
                    "Content-Type": "application/json"
                },
                json=record
            )
            if response.status_code in (200, 201):
                print(f"Registro enviado com sucesso: {record['process_number']}")
            else:
                print(f"Erro ao enviar registro {record['process_number']}: {response.status_code}, {response.text}")
        except Exception as e:
            print(f"Erro ao conectar-se com a API: {e}")

    def save(self, data, filter_date):
        for item in data:
            record = {
                "process_number": item.get("process_number"),
                "publication_date": filter_date.strftime("%Y-%m-%dT%H:%M:%SZ"),
                "content": item.get("full_text")
            }
            self.post_to_api(record)

    def run(self):
        try:
            self.driver.get(f"{self.url}/cdje/index.do")
            start_date = datetime.strptime(self.filters["dtInicio"], "%d/%m/%Y")
            end_date = datetime.today()
            current_date = start_date

            while current_date <= end_date:
                self.filters["dtInicio"] = current_date.strftime("%d/%m/%Y")
                self.filters["dtFim"] = current_date.strftime("%d/%m/%Y")
                print(f"Aplicando filtros para a data: {self.filters['dtInicio']}")
                
                self.configurator.apply_filters(self.filters)
                data = self.extractor.extract_publication_data()
                
                self.save(data, current_date)
                current_date += timedelta(days=1)
                
        except Exception as e:
            print(f"An error occurred during execution: {e}")
        finally:
            self.quit()
