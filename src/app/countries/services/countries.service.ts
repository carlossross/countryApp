import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private URL = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.URL}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((err) => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.URL}/capital/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.URL}/name/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.URL}/region/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }
}
