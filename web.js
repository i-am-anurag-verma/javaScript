
// function myFunction() {
// 	document.getElementById("demo").innerHTML= new Date();
// }

function operator(){
var x=9;
var y=11;
var z=x+y;
document.getElementById("demo").innerHTML= z;
}

myParagraph = () => {
	document.getElementById('demo').innerHTML= `Java is a set of computer software and specifications developed by James Gosling at Sun Microsystems, which was later acquired by the Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. Java applets, which are less common than standalone Java applications, were commonly run in secure, sandboxed environments to provide many features of native applications through being embedded in HTML pages.`
}
changePara = () => {
	document.getElementById('demo').innerHTML= `Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client–server web applications, with a reported 9 million developers.[21]

	Java was originally developed by James Gosling at Sun Microsystems and released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of it`
}

myNote = () => {
    document.getElementById("demo").innerHTML=`The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as < and < directly introduce content into the page. Other tags such as <p surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags but use them to interpret the content of the page.`
}

mySQL = () => {
    document.getElementById("demo").innerHTML=`SQL (/ˌɛsˌkjuɛl/ (listen) S-Q-L,[4] /sikwəl/ "sequel"; Structured Query Language)[5] is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables. SQL offers two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, e.g. with or without an index.`
}

myPython = () => {
    document.getElementById("demo").innerHTML=`Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.[32]

    Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library`
}
myPHP = () => {
    document.getElementById("demo").innerHTML=`PHP is a general-purpose scripting language geared toward web development.[7] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.[8] The PHP reference implementation is now produced by The PHP Group.[9] PHP originally stood for Personal Home Page,[8] but it now stands for the recursive initialism PHP: Hypertext Preprocessor.[10]`
    document.getElementById("demo").style.backgroundColor = "lightblue";
}

function myfunCtion() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
function myVideo() {
    alert("The video has started to play");
  }

function arithmatic(){
    let x=36;
    let y=54;
    let z=x+y;
    document.getElementById("demo").innerHTML=z;
}

function clickButton() {
    document.getElementById("field2").value = 
    document.getElementById("field1").value;
}
var test = function(value,object) {
    object.innerHTML= value;}

    function a1_onclick() {
        document.getElementById(demo).style.backgroundColor = "#F00";
    }

    function myFunction(element, color) {
        element.style.color = color;
      }    

      function index() {
        document.getElementById("field2").value = 
        document.getElementById("field1").value;
      }

      function foo() {
        alert("Submit button clicked!");
        return true;
     }

     function multiple(p1, p2) {
        x1= p1 * p2;
        document.getElementById("demo").innerHTML = x1;
      }
      
