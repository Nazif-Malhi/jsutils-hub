import { countries } from "../data/countries.data";
import { countries3 } from "../data/countriesType3.data";

import { ICountryData, TCountryCode } from "../types/countries.types";

export const getCountryData = (iso2: TCountryCode): ICountryData => ({
  ...countries[iso2],
  iso2,
  iso3: countries3[iso2],
});

export const getCountryDataList = (): ICountryData[] =>
  (Object.keys(countries) as TCountryCode[]).map((iso2) =>
    getCountryData(iso2)
  );

export const getCountryCode = (countryName: string): TCountryCode | false => {
  const countryDataList = getCountryDataList();
  // Match exact country name, but case insensitive
  const nameRegex = new RegExp("^" + countryName + "$", "i");

  return (
    countryDataList.find(
      ({ name, native }) => nameRegex.test(name) || nameRegex.test(native)
    )?.iso2 || false
  );
};

// "Regional Indicator Symbol Letter A" - "Latin Capital Letter A"
const UNICODE_BASE = 127462 - "A".charCodeAt(0);

// Country code should contain exactly 2 uppercase characters from A..Z
const COUNTRY_CODE_REGEX = /^[A-Z]{2}$/;

export const getEmojiFlag = (countryCode: TCountryCode): string =>
  COUNTRY_CODE_REGEX.test(countryCode)
    ? String.fromCodePoint(
        ...countryCode
          .split("")
          .map((letter) => UNICODE_BASE + letter.toUpperCase().charCodeAt(0))
      )
    : "";
