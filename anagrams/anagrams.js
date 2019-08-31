/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().

The first thing we want to do is come up with a plan for solving the problem. I start by defining some keywords and concepts
that are necessary and asking any clarifying questions such as: 

 	First of all what is an anagram?

The problem will likely have an example output of what your program should produce. In this case the interview can provide
you with the following example
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

  * allAnagrams('apps'); 
  * expected = ['apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa'];

from there you should be able to make some guessings about what an anagram is. Its probably a word that can be created
by rearranging the letters of word

  Ok that simple enough
  
  The next thing we want to do is identify and possible patterns by thinking about how we can solve this 
  in human terms

  a
  ab
  abc

  b
  ba
  bac

  c
  ca
  cab


a
as
asp
aspp

p
ps
psp
pspa

p
ps
psp
pspa

s
sp
spp
sppa




sppa

ppsa

ppsa



paps

sapp

pasp

apsp



paps

sapp

pasp

apsp



sapp

paps

paps

apps


From this we know we would iterate through each letter in the string. 

abc acb bac bca cab cba
apps apsp aspp sapp 
sapp spap psap
psap pspa ppsa
ppsa ppas
apsp paps 
paps pasp
spap sppa




 */


/*
write a funtion that takes a sting
first I would split the string to an array
then I would pop the last character and unshift it to the begining of my array
the new word will check the array to see if it exist, if it does not it will push it to 
an array
then then it will take a word from that new array and do the same thing again
*/