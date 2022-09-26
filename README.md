<h1 align="center">
	Compilers
</h1>

<h3 align="center">
	Project created for compiler testing
</h3>

<h4 align="center">
	Status: 🚧 In Construction
</h4>

<p align="center">
	<a href="#about">About</a> •
	<a href="#tech-stack">Tech Stack</a> •
	<a href="#test">Test</a> • 
	<a href="#test">References</a> • 
	<a href="#contact">Contact</a> 
</p>

<p align="center">
  <img alt="Capa do projeto" src="./img/img.svg" width="40%">
</p>

## About

EN = Project created for college compilers test, it aims to demonstrate concepts learned during the semester, the object-oriented language chosen was JavaScript for this test.

PT = Projeto criado para prova da matéria de compiladores da faculdade, ele tem como objetivo demonstrar conceitos aprendidos durante o semestre, a linguagem orientada a objeto escolhida foi JavaScript para essa prova.

## Tech Stack

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" height="25">&nbsp;</a>

## Test

1.  Regarding studies on compilers, the terms syntax and semantics stand out. Give the definition of each of them.

    **Syntax:**

    A strict grammar, which is a set of rules that determine what combinations of symbols and keywords can be used.

    **Semantics:**

    In addition to syntax, programming languages ​​must define well-defined semantics, that is, programming languages ​​must define the meaning of each allowed phrase.

2.  Cite two examples that illustrate your definition of syntax and semantics.

    **Syntax:**

    Consider the following program a hypothetical language.

    ```bash
    input N ;
    X := 0 ;
    for Y from 1 to N do
    X := X + Y
    end;
    output X
    ```

    Most languages ​​only use symbols and keywords to determine their syntax. Therefore, the instruction set corresponding to the above for iteration ends with the keyword end. However, some languages ​​use other mechanisms. For example, the corresponding Python code would be:

    ```py
    N = int(input())
    X = 0
    for Y in range(1, N + 1):
    X = X + Y
    print(X)
    ```

    While these algorithms are equivalent, the syntax of different programming languages ​​results in very different programs. Note that the iteration instruction set for this case is identified by indentation (or indentation). Also, we use a different notation for assignment: we use = instead of :=.

    **Semantics:**

    ```py
    for Y from 1 to N do
    ```

    could very well mean "subtract Y from 1 and store the result in N". Nothing guarantees, for example, that the words for, to and from have the same meaning as in English. Who guarantees that := means assignment, or even that + is the sum operator? It is semantics that determine what each sentence written in a programming language means.

3.  Comment on the definition of paradigms and principles of programming languages.

    **Programming language principles:**

    In the past, programs were written only in low-level languages. The writing is rigid, complex and very specific, inaccessible to the average developer. This kind of language requires a lot of knowledge (including how the processor handles machine instructions) from the person who wrote it.

    More recently, the source code of the computers used to direct the Apollo missions (whose main purpose was to put humans on the moon (during the infamous space race between the Soviet Union and the United States) has been released.
    They are AGC assembly language instructions, which is a variant of assembly, which by the way is low-level.

    A program written in one of these languages ​​is called a low-level program and consists of a series of machine instructions that determine what the processor should do. These instructions are translated into a language that the processor can understand, i.e. binary language (sequence of bits 0 and 1), which is classified as first generation programming language (1GL), i.e. first generation programming language .

    With the spread of computers, a "problem" arose: there was a high demand for software and therefore a high demand for programmers. Maybe you think that this is not exactly a problem, but a good thing, a trend, a new market. This makes sense, up to a point. The problem is finding skilled labor to write these complex instructions.

    As a result, new languages ​​have emerged and are getting closer and closer to human language. This opens a "frontier" for the specialization of a large number of new developers. These languages ​​are called high-level languages. The modern languages ​​we know and use today are high-level languages: C, PHP, Java, Rust, C#, Python, Ruby, etc.

    **Paradigms:**

    The paradigm of a programming language is its identity. It corresponds to a set of characteristics that together define how it works and solves problems. Some languages ​​even have multiple paradigms, they are called multiparadigms.

    Some of the main paradigms used in the market today:

    - Functional
    - Logical
    - Declarative
    - Imperative
    - object oriented
    - event oriented

4.  After completing the previous activity, choose an object-oriented programming language and cite some of its paradigms and principles.

    JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

5.  For a computer scientist and code developer what is the importance of these structures described in question number 2?

    So that there is a pattern in the code and that it is easy to understand for another person, in addition to clarity when performing maintenance on it.

6.  INDIVIDUAL ACTIVITY (Practice)
    Present on 09/29 in the laboratory a structure as an example of a compiler (free choice of object-oriented language)
    Here's a link as a reference: <a href="https://www.youtube.com/watch?v=KROEcC2RCRs" target="_blank">https://www.youtube.com/watch?v=KROEcC2RCRs</a>

    Items to be presented:

- Files with source codes.
- Repository properly organized on GitHub.
- Classroom presentation of the example presented.

## References

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">https://developer.mozilla.org/pt-BR/docs/Web/JavaScript</a>

<a href="https://www.ic.unicamp.br/~lehilton/cursos/1s2020/mc102qr/unidades/03-linguagens-programacao.html" target="_blank">https://www.ic.unicamp.br/~lehilton/cursos/1s2020/mc102qr/unidades/03-linguagens-programacao.html</a>

<a href="https://www.treinaweb.com.br/blog/linguagens-e-paradigmas-de-programacao" target="_blank">https://www.treinaweb.com.br/blog/linguagens-e-paradigmas-de-programacao</a>

## Contact

<img align="left" src="https://avatars.githubusercontent.com/IgorSilvaMedeiros?size=100">

Made with ❤️ by [Igor da Silva](https://github.com/IgorSilvaMedeiros), get in touch!

<a href="mailto:igoratendimento@outlook.com.br" target="_blank"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Email Badge" height="25"></a>&nbsp;
<a href="https://www.linkedin.com/in/igor-da-silva-medeiros/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;

<br clear="left"/>
