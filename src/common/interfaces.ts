export interface CompanyInterface {
  name: string;
  address?: string;
  phones?: ReadonlyArray<number>;
  city?: string;
  year?: string;
}
