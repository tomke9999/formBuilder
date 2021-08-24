export interface Column {
  field: string;
  headerName: string;
  description?: string;
  width: number;
}

export interface Row {
  id: number;
  korisnikId: number;
  nazivImePrezime: string;
  mobilniTelefon: string;
  poruka: string;
}
