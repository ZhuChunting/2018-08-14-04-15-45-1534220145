// Write your cade below:
module.exports = function main() {
  };

package remainder;
import java.util.Scanner;

public class ComputeRemainder {
  public static void main(String[] args) {
	  Scanner input=new Scanner (System.in);
	  double a=input.nextDouble();
	  double b=input.nextDouble();
	  double remainder= (double) a % b;
	  System.out.println("The remainder is" + remainder);
	  
  }
}
