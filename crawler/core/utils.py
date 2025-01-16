import re


class RegexUtils:
    PROCESS_NUMBER_PATTERN = r'Processo\s(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})'

    @staticmethod
    def extract_process_number(text):
        """
        Extracts the process number from a given text using regex.
        """
        match = re.search(RegexUtils.PROCESS_NUMBER_PATTERN, text)
        if match:
            return match.group(1)
        return None
