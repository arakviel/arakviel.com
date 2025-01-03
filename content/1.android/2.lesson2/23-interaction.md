# Взаємодія між Activity

У попередніх темах ми розглянули життєвий цикл `Activity` та запуск нових `Activity` за допомогою об'єкта `Intent`. Тепер розглянемо деякі особливості взаємодії між `Activity` в одному додатку. Припустимо, у нас є три `Activity`: `MainActivity`, `SecondActivity` та `ThirdActivity`.

![](/images/android/2-lesson/23-interaction/1.png)

За допомогою `Intent`, наприклад, по натисканню кнопки `MainActivity` запускає `SecondActivity`:

```java
Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);
```

На `SecondActivity` також є кнопка, яка запускає `ThirdActivity`:

```java
Intent intent = new Intent(this, ThirdActivity.class);
startActivity(intent);
```

На `ThirdActivity` також є кнопка, яка повертається до першої `Activity` — `MainActivity`:

```java
Intent intent = new Intent(this, MainActivity.class);
startActivity(intent);
```
![](/images/android/2-lesson/23-interaction/2.png)

Якщо ми послідовно запустимо всі activity: з головної `MainActivity` запустимо `SecondActivity`, з `SecondActivity` — `ThirdActivity`, то в результаті у нас складе наступний стек activity:

```text
ThirdActivity
SecondActivity
MainActivity
```

Якщо після цього з `ThirdActivity` ми захочемо звернутися до `MainActivity`, то метод `startActivity()` запустить новий об'єкт `MainActivity` (а не повернеться до вже існуючого), і стек буде виглядати наступним чином:

```text
MainActivity
ThirdActivity
SecondActivity
MainActivity
```

Тобто у нас буде дві незалежні копії `MainActivity`. Таке положення небажано, якщо ми просто хочемо перейти до існуючої. І цей момент треба враховувати.

Якщо ми натиснемо кнопку `Back` (Назад), то поточна activity, яка знаходиться на вершині стека, буде видалена зі стека, і попередня activity виявиться на вершині стека і відновить свою роботу. І таким чином за допомогою кнопки `Back` (Назад) ми зможемо перейти до попередньої activity в стеці. Наприклад, у випадку вище, якщо ми натиснемо на кнопку Назад, то `MainActivity` на вершині стека завершить свою роботу, і на екрані почне відображатися `ThirdActivity`.

```text
ThirdActivity
SecondActivity
MainActivity
```

Однак іноді виникає необхідність керувати переходами між activity. Наприклад, у даному випадку нам небажано при натисканні на кнопку в `ThirdActivity` запускати нову копію `MainActivity` замість того, щоб просто перейти до `MainActivity`, яка була запущена першою і знаходиться в самому низу стека. Розглянемо, які можливості надає нам Android.

## Керування стеком activity

Для керування стеком з activity Android пропонує використовувати флаги — константи, визначені в класі `Intent`. Використання певного флага дозволить змінити положення activity в стеці певним чином.

Наприклад, розглянемо попереднє завдання, коли після натискання на кнопку в `ThirdActivity` запускається новий екземпляр `MainActivity`. Але ми хочемо не запускати новий екземпляр, а перейти до вже існуючого.

```text
MainActivity
ThirdActivity
SecondActivity
MainActivity
```

Щоб вийти з цієї ситуації, ми можемо використати флаг `Intent.FLAG_ACTIVITY_REORDER_TO_FRONT`:

```java
Intent intent = new Intent(this, MainActivity.class);
intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
startActivity(intent);
```

Флаг `Intent.FLAG_ACTIVITY_REORDER_TO_FRONT` переміщає `activity`, до якої здійснюється перехід, на вершину стека, якщо вона вже є в стеці. І в цьому випадку після переходу з `ThirdActivity` до `MainActivity` стек буде виглядати наступним чином:

```text
MainActivity
ThirdActivity
SecondActivity
```

Якщо ж нам просто треба перейти з `ThirdActivity` до `MainActivity`, як якби ми повернулися назад за допомогою кнопки `Back`, ми можемо використовувати флаги `Intent.FLAG_ACTIVITY_CLEAR_TOP` та `Intent.FLAG_ACTIVITY_SINGLE_TOP`:

```java
Intent intent = new Intent(this, MainActivity.class);
intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
startActivity(intent);
```

Флаг `Intent.FLAG_ACTIVITY_CLEAR_TOP` очищає всі `activity`, крім тієї, яка запускається (якщо вона вже є в стеці). А флаг `Intent.FLAG_ACTIVITY_SINGLE_TOP` вказує, що якщо на вершині стека вже є `activity`, яку потрібно запустити, то вона НЕ буде запущена знову (вона може існувати в стеці тільки в єдиному екземплярі).

У цьому випадку після переходу з `ThirdActivity` до `MainActivity` стек буде повністю очищений, і в ньому залишиться тільки одна `MainActivity`.

Ще один флаг — `Intent.FLAG_ACTIVITY_NO_HISTORY` дозволить не зберігати в стеці запущену `activity`. Наприклад, при запуску `SecondActivity` ми не хочемо її зберігати в стеці:

```java
Intent intent = new Intent(this, SecondActivity.class);
intent.addFlags(Intent.FLAG_ACTIVITY_NO_HISTORY);
startActivity(intent);
```

У цьому випадку при переході по ланцюгу `MainActivity -> SecondActivity -> ThirdActivity` стек виглядатиме наступним чином:

```text
MainActivity
ThirdActivity
```
