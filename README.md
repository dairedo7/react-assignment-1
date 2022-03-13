**Read in other languages: [Русский](README.md), [Polska](README.pl.md).**

# React homework template

Ten projekt został stworzony przy pomocy Create React App. W celu zapoznania się z ustawieniami dodatkowych opcji zobacz dokumentację.

Przygotowanie nowego projektu
Upewnij się, że na komputerze zainstalowana jest wersja LTS Node.js. Ściągnij i zainstaluj, jeżeli trzeba.
Sklonuj to repozytorium.
Zmień nazwę folderu z react-homework-template na nazwę swojego projektu.
Utwórz nowe, puste repozytorium na GitHub.
Otwórz projekt w VSCode, włącz terminal i połącz projekt z repozytorium GitHub zgodnie z instrukcją.
Utwórz bazowe zależności projektu przy pomocy polecenia npm install.
Włącz tryb pracy, wykonując polecenie npm start.
Przejdź w przeglądarce pod adres http://localhost:3000. Ta strona będzie automatycznie przeładowywać się po zapisaniu zmian w plikach projektu.
Deployment
Produkcyjna wersja projektu będzie automatycznie poddana pracy lintera, budowana i deployowana na GitHub Pages, w gałęzi gh-pages za każdym razem, gdy aktualizuje się gałąź main, na przykład po bezpośrednim pushu lub przyjętym pull requeście. W tym celu należy w pliku package.json zredagować pole homepage, zamieniając your_username i your_repo_name na swoje nazwy i wysłać zmiany do GitHub.

"homepage": "https://your_username.github.io/your_repo_name/"
Następnie należy przejść do ustawień repozytorium GitHub (Settings > Pages) i wydystrybuować wersję produkcyjną plików z folderu /root gałęzi gh-pages, jeśli nie zostało to wykonane automatycznie.

GitHub Pages settings

Status deploymentu
Status deploymentu ostatniego commitu wyświetla się jako ikona obok jego identyfikatora.

Żółty kolor - wykonuje się zbudowanie i deployment projektu.
Zielony kolor - deploymnt zakończył się sukcesem.
Czerwony kolor - podczas pracy lintera, budowania lub deploymentu wystąpił błąd.
Bardziej szczegółowe informacje o statusie można zobaczyć po kliknięciu na ikonkę i przejściu w wyskakującym oknie do odnośnika Details.

Deployment status

Deployowana strona
Po jakimś czasie, zazwyczaj kilku minut, zdeployowaną stronę będzie można zobaczyć pod adresem wskazanym w zredagowanej właściwości homepage. Tutaj na przykład znajduje się odnośnik do zdeployowanej strony w wersji dla tego repozytorium https://goitacademy.github.io/react-homework-template.

Jeżeli otwiera się pusta strona, upewnij się, że w zakładce Console nie ma błędów związanych z nieprawidłowymi ścieżkami do plików CSS i JS projektu (404). Najprawdopodobniej wprowadzona została niewłaściwa wartość właściwości homepage w pliku package.json.

Trasowanie
Jeżeli aplikacja wykorzystuje bibliotekę react-router-dom dla trasowania, należy uzupełniająco skonfigurować komponent <BrowserRouter>, przekazując w propsie basename dokładną nazwę twojego repozytorium. Slash na początku i na końcu łańcucha jest obowiązkowy.

<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
Jak to działa
How it works

Po każdym pushu do gałęzi main repozytorium GitHub, uruchamia się specjalny skrypt (GitHub Action) z pliku .github/workflows/deploy.yml.
Wszystkie pliki repozytorium kopiują się na serwer, gdzie projekt zostaje zainicjowany i przechodzi pracę lintera oraz zbudowanie przed deploymentem.
Jeżeli wszystkie kroki zakończyły się sukcesem, zbudowana wersja produkcyjna plików projektu wysyłana jest do gałęzi gh-pages. W przeciwnym razie, w logu wykonania skryptu zostanie wskazane z czym jest problem.
