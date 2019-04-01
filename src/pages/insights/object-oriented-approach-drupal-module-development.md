---
title: 'An Object-Oriented Approach for Drupal Module Development'
templateKey: blog-post
date: 2010-04-26T14:52:09.000Z
category: Drupal, Tools of the Trade
alias: object-oriented-approach-drupal-module-development
summary: > 
 Now that I have been here for more than a month, I have had a solid opportunity to really dive into the inner workings of Drupal. Coming from a background where I worked with object-oriented programming and the MVC design pattern (model, view, controller), it has been a little overwhelming to get a grasp on exactly how Drupal is organized. I am used to a very clear separation of concerns that the MVC design pattern affords when using popular frameworks such as CodeIgniter and CakePHP. While there is a tool named Movico, which is essentially an MVC approach for structuring a Drupal module, I have yet to fully wrap my brain around how it interacts with Drupal.
author: Alex
image: /assets/post-placeholder.png
---

Now that I have been here for more than a month, I have had a solid opportunity to really dive into the inner workings of Drupal. Coming from a background where I worked with object-oriented programming and the [MVC design pattern](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller "MVC design pattern") (model, view, controller), it has been a little overwhelming to get a grasp on exactly how Drupal is organized.

I am used to a very clear separation of concerns that the MVC design pattern affords when using popular frameworks such as [CodeIgniter](http://www.codeigniter.com/ "CodeIgniter") and [CakePHP](http://www.cakephp.com/ "CakePHP"). While there is a tool named [Movico](http://hiveminds.co.uk/2010/02/22/movico-mvc-and-oop-module-for-drupal-updated-20100222/ "Movico"), which is essentially an MVC approach for structuring a Drupal module, I have yet to fully wrap my brain around how it interacts with Drupal.

MVC is a design pattern where the data is handled by models (mysql), the presentation layer is handled by the views (css/xhtml/jquery), and the controller (classes) monitors traffic and provides some business logic to the overall application. The way the popular frameworks have adopted this pattern for web-based applications is by using a router class which maps url segments to class names and methods. For example, the url "http://www.mydomain.com/about/history" would map to a controller class named "about" and to a method named "history":

class About extends Controller{

    public  
function \_\_construct()

    {

        parent::\_\_construct();

    }

    public function history()

    {

        do  
something here....

    }

}

Drupal has a semblance of mapping url segments to functions with its hook\_menu api; however, it does not have the clear separation of concerns I am used to. As a result, I have to honestly say that more than once I have wanted to pull my hair out because of all the spaghetti code and repetition that is involved for many tasks within modules. I have been able to reconcile its apparent lack of clear MVC-style code organization by realizing I am very new to the platform (I have a lot to learn)—and the fact that much of Drupal's power comes from its hook architecture.

In an effort to not go bald, I have also tried to find ways to introduce some object orientation to my code and modules to help keep myself dry (avoiding repetition) as much as possible. It also has given me the ability to reuse code across projects and modules. This is being accomplished by creating special helper classes to address common functionality that I was finding as I worked on various solutions. This approach also allows for a level of abstraction that makes it very easy to hide the inner workings of the module or template functions while exposing only those parts that are necessary for the api to make sense.

For example, in a recent module project I created the standard my\_module.module file with the necessary my\_module\_menu that maps urls and segments to module functions. Each menu has its own function file that provides the callbacks necessary to present the content for that item. I then created a special class for my module, which I included in the my\_module.module file, making all of the methods available to me in any part of the module.

For each module function where I found repetitive code, I tried to create a static method wrapper that would allow me to isolate its core functionality and abstract it enough so I could reuse it along the way. Since this only works for custom code, I have to still use procedural functions to call core Drupal hooks, but within those hook functions, I can call any static methods in my own class to achieve the application's goals. Below is an example of a static class method:

/\*\*

\* Description of static  
method

\*

\* @param int $int

\* @return string $result

\*/

public static function  
method\_name($int)

{

    $result = 'The common code you need to run.';

    return  
$result;

}

By wrapping my common functions in a static class, it allows me to call the method in one line and, if necessary, gives me the ability to extend each function as my module or needs change. For example, I could add a new argument to make the method more useful:

/\*\*

\* Description of static method

\*

\* @param int $int

\* @param  
array $array 

\* @return string $result

\*/

public static function method\_name($int,  
$array=array())

{

    Add array for loop code here or other functionality;

    $result =  
'The common code you need to run.';

    return $result;

}

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")The full class would look something like this:

/\*\*

 \* My Module Class

 \*

 \* A set of common functions for  
my module.

 \*

 \* @package    module

 \* @author     Digett

 \*  
@copyright  (c) 2010 Digett

 \*/

class my\_module\_class

{

    /\*\*

    \*  
Description of static method

    \*

    \* @param int $int

    \* @param  
array $array 

    \* @return string $result

    \*/

    public  
static function method\_name($int, $array=array())

    {

        Add  
array for loop code here or other functionality;

        
 $result = 'The common code you need to run.';

        return $result;

    }

}

To call a method in my class inside a procedural function, I type: 

my\_module\_class::method\_name()

Using static classes is beneficial in this context because it does not require us to instantiate the class and create a new object each time. Having all our common methods wrapped in a class affords us the portability, reusability, and dryness of code that is essential in larger modules. While Drupal does use some object-oriented type approaches within its architecture (i.e. node and user objects), a full object-oriented approach is not available. Using custom helper classes for your modules or template functions can help alleviate the headaches of spaghetti code that can quickly result without a well-planned-out approach.

Some other benefits of organizing your code like this include instant documentation, if you follow the PHPDoc convention. Using online tools like the [PHP Documentor](http://www.keyframesandcode.com/resources/php/redmine/documentor/ "PHP Documentor"), you could create a fully formatted document that explains your class, methods, and parameters, thereby allowing you to provide very good information about your API; in my case, it helps me remember if I need to pass a string or an array to a method. Also, if you are using IDE's that provide code insight, having a fully documented API using the PHPDoc convention will give you instant access to the methods or arguments for a class method as you call them. IDE's like NetBeans and PHPEd provide this built-in functionality out of the box.

Drupal is a powerful framework which, while not fully object oriented, provides the flexibility to introduce coding patterns that make for a better organization and rapid development.