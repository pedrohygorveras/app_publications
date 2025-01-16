from config.settings import URL, FILTERS
from app.scraper_app import WebScraperApp

if __name__ == "__main__":
    app = WebScraperApp(URL, FILTERS)
    app.run()
