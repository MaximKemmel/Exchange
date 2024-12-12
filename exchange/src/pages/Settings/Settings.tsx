import { useEffect, useState } from "react";
import EnglishImage from "../../assets/english.png";
import RussianImage from "../../assets/russian.png";
import SpanishImage from "../../assets/spain.png";
import ArrowImage from "../../assets/arrow.png";
import NextArrowImage from "../../assets/next_arrow.png";
import SearchImage from "../../assets/search.png";
import "./settings.css";

const Settings = () => {
  const [isLanguagesActive, setIsLanguagesActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [searchedValue, setSearchedValue] = useState("");

  const languages = [
    { label: "English", flag: EnglishImage },
    { label: "Русский", flag: RussianImage },
    { label: "Spanish", flag: SpanishImage },
    { label: "English", flag: EnglishImage },
    { label: "Русский", flag: RussianImage },
    { label: "Spanish", flag: SpanishImage },
    { label: "English", flag: EnglishImage },
    { label: "Русский", flag: RussianImage },
    { label: "Spanish", flag: SpanishImage },
  ];
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  useEffect(() => {
    if (
      searchedValue.trim().length === 0 ||
      languages.filter((language) => language.label.toLowerCase().startsWith(searchedValue.toLowerCase())).length === 0
    ) {
      setFilteredLanguages(languages);
    } else {
      setFilteredLanguages(
        languages.filter((language) => language.label.toLowerCase().startsWith(searchedValue.toLowerCase()))
      );
    }
  }, [searchedValue]);

  useEffect(() => {
    var navigation = window.document.getElementById("navigation");
    if (navigation) {
      if (isLanguagesActive) {
        navigation.classList.remove("active");
      } else {
        navigation.classList.add("active");
      }
    }
  }, [isLanguagesActive]);

  return (
    <div className="container">
      <div
        className="language_button"
        onClick={() => {
          setIsLanguagesActive(!isLanguagesActive);
          setSearchedValue("");
        }}
      >
        {isLanguagesActive ? (
          <div className="content">
            <div className="value">
              Choose language
              <img src={ArrowImage} alt="" />
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="label">Language</div>
            <div className="value">
              <img src={languages[selectedLanguage].flag} alt="" />
              {languages[selectedLanguage].label}
              <img className="reversed" src={ArrowImage} alt="" />
            </div>
          </div>
        )}
      </div>
      {isLanguagesActive ? (
        <>
          <div className="input_container">
            <input
              id="searchInput"
              className="search_input"
              placeholder="Search"
              value={searchedValue}
              onChange={(event) => setSearchedValue(event.target.value)}
            />
            <img src={SearchImage} alt="" />
          </div>
          <div className="settings">
            {filteredLanguages.map((item, index) => (
              <div
                className="settings_item"
                onClick={() => {
                  setSelectedLanguage(index);
                  setIsLanguagesActive(false);
                  setSearchedValue("");
                }}
              >
                <div className="value">
                  <img src={item.flag} alt="" />
                  {item.label}
                </div>
                <img className="arrow" src={NextArrowImage} alt="" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="settings">
          <div className="settings_item">
            <div className="value">О нас</div>
            <img className="arrow" src={NextArrowImage} alt="" />
          </div>
          <div className="settings_item">
            <div className="value">Наш телеграм</div>
            <img className="arrow" src={NextArrowImage} alt="" />
          </div>
          <div className="settings_item">
            <div className="value">Поддержка</div>
            <img className="arrow" src={NextArrowImage} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
