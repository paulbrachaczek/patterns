# Wzorce projektowe w JavaScript

Wzorce projektowe dzielimy na:

  - Kreacyjne - koncepcje tworzenia obiektów,
  - Strukturalne - dotyczą idei budowania bloków obiektów,
  - Behawioralne - opisują sposób komunikacji pomiędzy obiektami.

____

##  Moduł / Module (wzorzec kreacyjny)

W JavaScript, wzorzec Module jest używany do dalszego emulowania pojęcia klas w taki sposób, że jesteśmy w stanie uwzględnić zarówno publiczne / prywatne metody i zmienne w jednym obiekcie, chroniąc w ten sposób poszczególne części przed globalnym zakresem. Wynikiem tego jest zmniejszenie prawdopodobieństwa, że nazwy funkcji kolidują z innymi funkcjami zdefiniowanymi w dodatkowych skryptach na stronie.
Wzorzec czesto występuje w wersji ujawnionej (Revealing Module Pattern), w której definiujemy wszystkie funkcje i zmienne w zakresie prywatnym i zwracamy anonimowy obiekt ze wskazówkami do prywatnej funkcjonalności, którą chcieliśmy ujawnić jako publiczną.

____

## Fabryka / Factory (wzorzec kreacyjny)

Fabryka może zapewnić ogólny interfejs do tworzenia obiektów, w którym możemy określić typ obiektu fabrycznego, który chcemy utworzyć. Na podstawie typu fabryka kieruje do odpowiedniej podklasy na podstawie której utworzona zostaje instancja obiektu.

____

## Fabryka abstrakcyjna / Abastract Factory (wzorzec kreacyjny)

Zapewnia interfejs do tworzenia rodzin powiązanych lub zależnych obiektów bez określania ich konkretnych klas.

____

##  Fasada / Fasade (wzorzec strukturalny)

Fasada to wzorzec, który zapewnia wygodny, uproszczony interfejs wyższego poziomu dla większej części kodu, ukrywając jego prawdziwą złożoność. Często wykorzystywany w bibliotekach dla wygody i zapewnienia kompatybilności ze starszymi przeglądarkami. 
Wady wzorca to m. in. czasem mmiejsza wydajnośc - np. $('#') zamiast getElementById.

___

## Pyłek / Flyweight (wzorzec strukturalny)

Redukuje ilosc kodu potrzebnego do stworzenia wielu podobnych obiektów. 

