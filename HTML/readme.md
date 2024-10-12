<!-- content -->
1.HTML introduction
2.Text formating tag
3.Hyperlinks 
4.List 
4.i.Description list 
4.ii.Description Definition
5.Table
6.Forms
7.Media
8.Semantic Tags





 <!-- hello readme .md file -->
path are two types:-
1.Absolute path:->>> the path which is represented from its root directory is known as absolute path  .
2.Relative path:->>>the path which is represented from its current working directory is known as relative path.


*** note :- jisme agar https aata hai path is absolute path -->

Dated->06/08/2024

 # Html HyperlINKS 
it is used to link or connect the different doceuments to our web /html pages.
##STEPS TO CREATE THE HYPERLINKS
1. First we have to mark the content, to mark the content we use anchor tag (<a></a>) It is a container tag.
2.Monitor the path or location on Hyper refernce where we want user to be redirected we use (hrf) attribute.

--------absolute path of hyperlinks----------------
<a href="https://www.google.com" target =" ___blank">
Google
</a>

**** States of Anchor Tag ****
1.Not Visited --- uska color Skykblue
2.Active:- Red  color 
3.Visited :-purple color rahega links ka


-------------TARGET ATTRIBUTE-----
Target attribute is used to specify where to open the link
  1) _self:-.open in the same browser (default hota hai).
  2) _blank :-open in different tab

<!-- ====================HYPERLINKS PART-2 ===========-->



<!-- creating our own PAN network -->
ipconfig se ipv4 address port mil jayega then phone me ipv4+type karna hai then live server ka path likna hai....

<!-- =======================================13AUGUST2024============================================================== -->
 # LIST
For code refer:-list.html
lIST IS a collection or grouup of related items
types of list 
1.Ordered list
2.unordered list
3.Description List/Dictionary list/Definition list
<!-- -----------------------

# ORDERED LIST 
 --> Its is group of related items in an order/sequence
 to create a order list 
 we use <ol></ol> tag
 ---->to create a list we use <li></li> tag
 <!-- Syntax: <ol type="" start="" reversed>
 <li> html</li>
<li>css</li> -->
 
 </ol>

# Attribute of ordered list:-
 1.type :type attribute is used to specify which type of bullet you want to represent .
           
           type:_______ values(1,a,A,I,i);

 2.start :start attribute specify the staaring of the sequence and here start only accept only the number.
               start:_______ values (1,2,3..);
               kaha se sequence start ho ye decide karte hai...

 3. reserved :reserved attribute is used to reverse the order of the orderd list.


# Unordered list
 It is a group of related items respresented in an unorderd way i,e bullets are not follwing any sequence.

 To create a unordered list we use <ul></ul> tag. it is an container tag.
 To create a list items we use <li></li> tag.

 # ATTRIBUTE OF UNORDERED LIST
 1.Type :- Type attribute is used to specify which type of bullets you want to represent.
       
       type:"____" values :- (disc ,circle,square,none)

# Description List /Dictionary List/Defintion list
1. Description list is  a list of term with a description of each term.
2. To create a description list we use <dl></dl> tag.It is container tag.
3. To create a description term we use <dt></dt> tag.
4. to create a description definition we use <dd></dd> tag.
5. Description definition tag we have to write within description term tag.
6. description term tag we have to write in description list tag.
          Syntax:-
          <dl>Description List
            <dt> Description Term -1
            <dd> Description definition Tag</dd>
            </dt>
            <dt>Description Term-2
            <dd>Description description Tag</dd>
            </dt>
            </dl> 


Dated 20/Aug/2024
# Tables
1.It is a collection of rows and columns
2.Table is a grid organises in rows and columns much like a spreadsheet
3.to create a table in html we use <table></table> tag.
4.It is a container tag and Semantic tag( self explanatory) tag
5.here we are creating table row by row
6.to create a table we use <tr></tr> tag
7.to create a cells ,HTML provide 2 tags
      i)  <TH></TH> Tag:- It is used to create a table heading cells
      ii) <TD></TD> Tag:- It is used to create a table data cells.
8.to provide title or caption to the table we use <caption></caption> tag.
      
9. Syntax:-
        <table border="1">
        <caption> Employee Salary Table</caption>

        <tr>
           <th>EMP ID</th>
            <th>ENAME</th>
            <th>SALARY</th>
        </tr>
        <tr>
           <td>101</td>
              <td>Amit</td>
                 <td>500000</td>
        </tr>
         <tr>
           <td>105</td>
              <td>Mohan</td>
                 <td>508920</td>
        </tr>
 Note:-  td tag  me do cheeze kaar sakte hai i) rowspan,ii) colspan for merging rows and columns respectively.    

# Cell spacing

in html we have 2 ways to span the cells 
1. Rowspan:- Rowspan is an attribute used to span(extends) the cells on row basis
2.Colspan:- Rowspan is an attribute used to span(extends) the cells on column basis.

# Attributes of table tag

1.Cellpadding:- to create space between the cells border and cell content is known as cellpadding
2.Cellspacing:- to create space between outside the cell is known as cellspacing.
3. Border :- It is used to provide border 
4.rules="all"   (it collapse the boder of different -different cells border)
5.align="center" used to center the items inside the cells.



 Dated --> 21/Aug/2024/Wednesday

 # Thead Tag
 It is a container tag.
 2. It represents top most part of our table.
 3.The top part of our table  we have to write with in <thead></thead> tag.

# Tbody tag
1.  It is a container tag.
2. the remaining part of our table we have to write with<tbody></tbody> tag.

# Tfoot tag
1. It is a container tag.
2. the conclusion of summary of the table we have to write with <tfoot></tfoot> tag
3. it represent bottom most part of the table

# Note:- Thread,tbody,tfoot tag are  highly recommended for better explanation to crawler  and code understanding purpose.

Dated---> 22/Aug/2024/Thrusday

# HTML form:-
1. Forms are used to accept the input from user
2.To create a form in html we use <form></form> tag.
3. It is a container tag.
4. In html form we are accepting input from the user in an input field.
5. To create input field  we use <input> tag It is non-container tag(Un-pair tag)

# Attributes of input tag.
1.Type: Type attribute is used to specify which type of data be can accept in an input field.
    <input type="___">
     values:- i)text
              ii)tel
              iii)email
              iv)password
              v)file multiple
              vi)date
              vii)time
              viii)datetime-local
              ix)color
              x)range
              xi)search
              xii) url
              xiii)submit
              xiv)reset 
              xv)number
              xvi)radio
              xvii)checkbox
              xviii) image
              xix) button
              xx) month 
              xxi)week
              xxii) hidden


Dated->27/Aug/2024

 <!-- input tag ke andar name ka matlab hai ki hum brower ya server ko batasake kis type ka data hai... -->
# Basic difference between disabled and readonly <!-- disabled wala database me nhi jayega -->
          <!-- readonly wala data backend me jayega -->

add some notes point from github upload



Dated->28/Aug/2024
# Data list
notes from github
# Text Area
notes from github



# Difference between id and class
             ID
             1.It is used to target element uniquely
             2.Multiple elements can not have  the same id 
             Ex- <p id="Ptag-1">Paragraph-1</p>
                  <p id="Ptag-2">Paragraph-2</p>
             3.One element can have only one id(Single id)
             EX- <div id="div-1  tag-1  chambu">Div Tag</div>
                       ------    -----  -----  
                       First id   2 id    3 id  --- It must be single id ,(Here this is not possible).
            4.To target the element in id we use # (hash) operator
            5.It is global attribute we can use in any tag           



          CLASS
          1. It is used to target multiple element at a time.
          2. Multiple elements can have the same class
          Ex- <p class="Ptag">Paragraph-1</p>
              <p class="Ptag">Paragraph-2</p>
         3.One element have multiple classes.
          Ex-  <div class=" div-1 tag-1 chambu" >Div Tag</div>
                           -----  ----  -----
                           1 value  2vl  3vl             multiple class value allowed


         4.To target the element in class we use .(dot) operator.
         5.It is also a global attribute so we can use in any tag.


# differnce between span and div
  div- It  is a block level Container.
  span - It is inline level Container.

# Media tag
used to connect the audio and video files  



Datad-> 30/Aug/2024
# Semantic Tag
  1.It is a self-explainatory tag
  these are
    i) Header
    ii) Footer
    iii) Section
    iv) Article
    v) Nav
    vi)Main
    vii) Aside





