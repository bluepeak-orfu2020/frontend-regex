using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace RegexDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var regex = new Regex("bbb");
            Console.WriteLine($"is match aaa: {regex.IsMatch("aaa")}");
            Console.WriteLine($"is match bbb: {regex.IsMatch("bbb")}");

            var match = regex.Match("bbb");
            Console.WriteLine($"match object: {match}");
            Console.WriteLine($"match value: {match.Value}");

            var regexWithGroup = new Regex("aa(bb|cc)");
            var matchWithGroup = regexWithGroup.Match("aacc");
            Console.WriteLine($"match with group: {matchWithGroup.Groups[1].Value}");

            Console.Read();
        }
    }
}
