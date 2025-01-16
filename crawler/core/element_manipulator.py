class ElementManipulator:
    def __init__(self, driver):
        self.driver = driver

    def set_input_value(self, element_name, value):
        script = f"""
        var select = document.getElementsByName('{element_name}')[0];
        if (select) {{
            select.value = '{value}';
            var event = new Event('change', {{ bubbles: true }});
            select.dispatchEvent(event);
        }}
        """
        self.driver.execute_script(script)
