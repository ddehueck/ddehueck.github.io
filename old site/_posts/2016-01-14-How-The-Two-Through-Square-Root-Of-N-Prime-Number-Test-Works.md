---
published: true
---





## How The Two Through Square Root Of N Prime Number Test Works

Programmers are often asked to create a program that checks for the primeness of a number to "demonstrate their problem-solving skill." The most obvious way to do this is to simply check every number in the range 2 through n-1 for a remainder when dividing by n (%). But most programmers know that you only need to check 2 through the square root of n. This greatly reduces the run time of the original algorithm. 

I must've picked this algorithm up when doing some MOOCs or reading through comments on Hacker News, but I never really asked why it worked. So I sat down and decided to figure this out without the benevolent help of google it. Here's what I came up with: 

Let's start by going through our algorithm and let's check for if 24.
This means our range is 2 through sqrt(24) or more reasonably 2 through 4 inclusive (we drop the decimal of sqrt(24) and don't round up). Now we only have to check [2 3 4] for remainders instead of [2 3 4 5 ... 24] and something interesting becomes apparent if we compare [2 3 4] to [2 3 4 5 ... 24]. Take a look:

    [2 3 4] 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
    
Notice anything? No? What if we take out all prime numbers under 24?

    [2 3 4] 6 8 9 10 12 14 15 16 18 20 21 22 24
    
All these numbers are divisible by a number in our range of 2 through 4 which means _it's redundant to check if n is divisible by any composite number outside the range of 2 to sqrt(n)_. But what about those prime numbers we got rid of? 

Let's think about this. If we want to know whether or not a number is prime we must find two numbers besides 1 and n whose product is n. Since we're dealing with prime numbers less than n we would be checking the product of one of these prime numbers under n and another number. Well, it turns out the only time we could multiply a prime number by another number and still be less than n would be the prime number multiplied by a number in our range of 2 to sqrt(n). Continuing with our example: 

	Prime numbers less than 24: [3 5 7 11 13 17 19 23]
    
     5 * 5 = 25 which is greater than n of 24

     4 * 5 = 20 which has the factor of 4 which is in our range   
     
Now there are no numbers unaccounted for. So by asking the right questions and examining each element carefully, it is possible to understand why the range of 2 through the sqrt(n) test proves whether or not n is prime. I know this isn't the most mathematically sound way to prove this algorithm but I believe it's one of the best ways the grasp the concept. If you can tell me why I'm wrong please tweet me at the link below, cheers!
