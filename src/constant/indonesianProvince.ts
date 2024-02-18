import { DataInterface } from "./global";

interface ProvinceData {
  id: number;
  key: string;
  name: string;
}

const IndonesianProvinceData: ProvinceData[] = [
  {
    id: 11,
    key: "aceh",
    name: "Aceh",
  },
  {
    id: 12,
    key: "sum_ut",
    name: "Sumatra Utara",
  },
  {
    id: 13,
    key: "sum_bar",
    name: "Sumatra Barat",
  },
  {
    id: 14,
    key: "riau",
    name: "Riau",
  },
  {
    id: 15,
    key: "jambi",
    name: "Jambi",
  },
  {
    id: 16,
    key: "sum_sel",
    name: "Sumatra Selatan",
  },
  {
    id: 17,
    key: "bengkulu",
    name: "Bengkulu",
  },
  {
    id: 18,
    key: "lampung",
    name: "Lampung",
  },
  {
    id: 19,
    key: "ba_bel",
    name: "Kepulauan Bangka Belitung",
  },
  {
    id: 21,
    key: "kep_riau",
    name: "Kepulauan Riau",
  },
  {
    id: 31,
    key: "jakarta",
    name: "DKI Jakarta",
  },
  {
    id: 32,
    key: "ja_bar",
    name: "Jawa Barat",
  },
  {
    id: 33,
    key: "ja_teng",
    name: "Jawa Tengah",
  },
  {
    id: 34,
    key: "yogya",
    name: "DI Yogyakarta",
  },
  {
    id: 35,
    key: "ja_tim",
    name: "Jawa Timur",
  },
  {
    id: 36,
    key: "banten",
    name: "Banten",
  },
  {
    id: 51,
    key: "bali",
    name: "Bali",
  },
  {
    id: 52,
    key: "ntb",
    name: "Nusa Tenggara Barat",
  },
  {
    id: 53,
    key: "ntt",
    name: "Nusa Tenggara Timur",
  },
  {
    id: 61,
    key: "kal_bar",
    name: "Kalimatan Barat",
  },
  {
    id: 62,
    key: "kal_teng",
    name: "Kalimatan Tengah",
  },
  {
    id: 63,
    key: "kal_sel",
    name: "Kalimatan Selatan",
  },
  {
    id: 64,
    key: "kal_tim",
    name: "Kalimatan Timur",
  },
  {
    id: 65,
    key: "kal_ut",
    name: "Kalimatan Utara",
  },
  {
    id: 71,
    key: "sul_ut",
    name: "Sulawesi Utara",
  },
  {
    id: 72,
    key: "sul_teng",
    name: "Sulawesi Tengah",
  },
  {
    id: 73,
    key: "sul_sel",
    name: "Sulawesi Selatan",
  },
  {
    id: 74,
    key: "sul_teng",
    name: "Sulawesi Tenggara",
  },
  {
    id: 75,
    key: "gorontalo",
    name: "Gorontalo",
  },
  {
    id: 76,
    key: "sul_bar",
    name: "Sulawesi Barat",
  },
  {
    id: 81,
    key: "maluku",
    name: "Maluku",
  },
  {
    id: 82,
    key: "mal_ut",
    name: "Maluku Utara",
  },
  {
    id: 92,
    key: "pa_bar",
    name: "Papua Barat",
  },
  {
    id: 91,
    key: "papua",
    name: "Papua",
  },
];

export const SAMPLE_DATA = {
  aceh: "",
  sum_ut: "",
  sum_bar: "",
  riau: "",
  jambi: "",
  sum_sel: "",
  bengkulu: "",
  lampung: "",
  ba_bel: "",
  kep_riau: "",
  jakarta: "",
  ja_bar: "",
  ja_teng: "",
  yogya: "",
  ja_tim: "",
  banten: "",
  bali: "",
  ntb: "",
  ntt: "",
  kal_bar: "",
  kal_teng: "",
  kal_sel: "",
  kal_tim: "",
  kal_ut: "",
  sul_ut: "",
  sul_tengah: "",
  sul_sel: "",
  sul_tengara: "",
  gorontalo: "",
  sul_bar: "",
  maluku: "",
  mal_ut: "",
  pa_bar: "",
  papua: "",
};

export const SAMPLE_DATA_BY_ID: DataInterface[] = [
  {
    id: 11,
    description: "Deskripsi Aceh",
    color: "red",
  },
  {
    id: 12,
    description: "Deskripsi Sumatra Utara",
  },
  {
    id: 13,
    description: "Deskripsi Sumatra Barat",
  },
  {
    id: 14,
    description: "Deskripsi Riau",
  },
  {
    id: 15,
    description: "Deskripsi Jambi",
  },
  {
    id: 16,
    description: "Deskripsi Sumatra Selatan",
  },
  {
    id: 17,
    description: "Deskripsi Bengkulu",
  },
  {
    id: 18,
    description: "Deskripsi Lampung",
  },
  {
    id: 19,
    description: "Deskripsi Kepulauan Bangka Belitung",
  },
  {
    id: 21,
    description: "Deskripsi Kepulauan Riau",
  },
  {
    id: 31,
    description: "Deskripsi DKI Jakarta",
  },
  {
    id: 32,
    description: "Deskripsi Jawa Barat",
  },
  {
    id: 33,
    description: "Deskripsi Jawa Tengah",
  },
  {
    id: 34,
    description: "Deskripsi DI Yogyakarta",
  },
  {
    id: 35,
    description: "Deskripsi Jawa Timur",
  },
  {
    id: 36,
    description: "Deskripsi Banten",
  },
  {
    id: 51,
    description: "Deskripsi Bali",
  },
  {
    id: 52,
    description: "Deskripsi Nusa Tenggara Barat",
  },
  {
    id: 53,
    description: "Deskripsi Nusa Tenggara Timur",
  },
  {
    id: 61,
    description: "Deskripsi Kalimatan Barat",
  },
  {
    id: 62,
    description: "Deskripsi Kalimatan Tengah",
  },
  {
    id: 63,
    description: "Deskripsi Kalimatan Selatan",
  },
  {
    id: 64,
    description: "Deskripsi Kalimatan Timur",
  },
  {
    id: 65,
    description: "Deskripsi Kalimatan Utara",
  },
  {
    id: 71,
    description: "Deskripsi Sulawesi Utara",
  },
  {
    id: 72,
    description: "Deskripsi Sulawesi Tengah",
  },
  {
    id: 73,
    description: "Deskripsi Sulawesi Selatan",
  },
  {
    id: 74,
    description: "Deskripsi Sulawesi Tenggara",
  },
  {
    id: 75,
    description: "Deskripsi Gorontalo",
  },
  {
    id: 76,
    description: "Deskripsi Sulawesi Barat",
  },
  {
    id: 81,
    description: "Deskripsi Maluku",
  },
  {
    id: 82,
    description: "Deskripsi Maluku Utara",
  },
  {
    id: 92,
    description: "Deskripsi Papua Barat",
  },
  {
    id: 91,
    description: "Deskripsi Papua",
  },
];
