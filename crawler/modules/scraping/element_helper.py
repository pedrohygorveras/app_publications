from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException


class ElementHelper:
    @staticmethod
    def get_text_from_element(parent, xpath):
        """
        Extracts and strips text from an element using the given XPath.
        """
        try:
            element = parent.find_element(By.XPATH, xpath)
            return element.text.strip()
        except NoSuchElementException:
            print(f"Element not found for XPath: {xpath}")
            return ""
