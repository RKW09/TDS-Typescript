console.clear();

for(let i: number = 1; i <= 100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i)
    }
}
                               
/*Link do Playground
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC4DMQM4AXAAgEsAucsAVwFsAjWVcgXnIEZsryAPF24AGEX0oBqSZlwBvXOSVUC6SuQCk5AMycuI8gDJD-LQFY95EbOXkFt26EgwE0EAHN0AIgBilAF7+AEL0gV44isoAvpFKsNAQsCpqmjqW1rF2mY7gUHDwbp6+Af7heLYxtvGJyerm6TbK9g5KTnmuHt4hYREVmdWwmc0tbS4FnZSNSjFRQA
*/
