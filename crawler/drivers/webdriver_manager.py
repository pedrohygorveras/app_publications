from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

class WebDriverManager:
    def __init__(self):
        self.options = webdriver.ChromeOptions()
        self._set_default_options()

    def _set_default_options(self):
        self.options.add_argument("--headless")
        self.options.add_argument("--disable-gpu")
        self.options.add_argument("--no-sandbox")

    def add_option(self, argument: str):
        self.options.add_argument(argument)

    def get_driver(self):
        try:
            driver = webdriver.Chrome(
                service=Service(ChromeDriverManager().install()),
                options=self.options
            )
            return driver
        except Exception as e:
            raise RuntimeError(f"Failed to initialize WebDriver: {e}")
