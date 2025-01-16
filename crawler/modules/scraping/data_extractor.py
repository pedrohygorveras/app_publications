from selenium.webdriver.common.by import By
from core.utils import RegexUtils
from modules.scraping.element_helper import ElementHelper


class DataExtractor:
    def __init__(self, driver):
        self.driver = driver

    def extract_publication_data(self):
        """
        Extracts publication data from the given driver.
        """
        try:
            publications = self.driver.find_elements(By.XPATH, "//tr[contains(@class, 'fundocinza1')]")
            extracted_data = []

            for index, publication in enumerate(publications):
                print(f"Processing publication {index + 1}")
                try:
                    relevant_text = ElementHelper.get_text_from_element(publication, ".//td[2]")

                    if not relevant_text:
                        print("Empty text. Skipping publication.")
                        continue

                    process_number = RegexUtils.extract_process_number(relevant_text)

                    extracted_data.append({
                        "index": index,
                        "process_number": process_number,
                        "full_text": relevant_text,
                    })

                except Exception as e:
                    print(f"Error processing publication {index + 1}: {e}")
                    continue

            return extracted_data

        except Exception as e:
            print(f"Error finding publications: {e}")
            return []
