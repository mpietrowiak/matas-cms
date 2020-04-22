# TODO

## Logowanie

Jeżeli user nie jest zalogowany, to ma wyświetlić się strona logowania.
Możemy utworzyć w aplikacji globalny kontekst który będzie przechowywać aktualny stan logowania.
Otaczamy komponent naszej aplikacji providerem kontekstu.


`export const ConfigContext = React.createContext();`

```
const configValue = {
  loggedInUserEmail: 'matas8@protonmail.com'
}
```

```
const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  )
}
```