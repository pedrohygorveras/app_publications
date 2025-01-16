from selenium.webdriver.common.by import By
from core.element_manipulator import ElementManipulator

class FilterConfigurator:
    def __init__(self, driver):
        self.manipulator = ElementManipulator(driver)

    def apply_filters(self, filters):
        try:
            self.manipulator.set_input_value(
                'dadosConsulta.dtInicio', 
                filters['dtInicio']
            )
            self.manipulator.set_input_value(
                'dadosConsulta.dtFim', 
                filters['dtFim']
            )
            self.manipulator.set_input_value(
                'dadosConsulta.cdCaderno', 
                filters['cadernos']
            )
            # self.manipulator.set_input_value(
            #     'dadosConsulta.pesquisaLivre',
            #     " e ".join(filters['pesquisaLivre', []))
            # )

            search_button = self.manipulator.driver.find_element(
                By.XPATH,
                "//form[@name='consultaAvancadaForm']//input[@type='submit' and @value='Pesquisar']"
            )
            search_button.click()
        except Exception as e:
            print(f"Erro ao aplicar filtros: {e}")
