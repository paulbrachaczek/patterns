# Wzorce projektowe w JavaScript

Wzorce projektowe dzielimy na:

  - Kreacyjne - koncepcje tworzenia obiektów,
  - Strukturalne - dotyczą idei budowania bloków obiektów,
  - Behawioralne - opisują sposób komunikacji pomiędzy obiektami.

____

##  Moduł

W JavaScript, wzorzec Module jest używany do dalszego emulowania pojęcia klas w taki sposób, że jesteśmy w stanie uwzględnić zarówno publiczne / prywatne metody i zmienne w jednym obiekcie, chroniąc w ten sposób poszczególne części przed globalnym zakresem. Wynikiem tego jest zmniejszenie prawdopodobieństwa, że nasze nazwy funkcji kolidują z innymi funkcjami zdefiniowanymi w dodatkowych skryptach na stronie.