// Write your cade below:
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



作业2
package array;

import java.util.Scanner;
public class ComputeArray {
public static void main(String[] args){
int x=0;
double avg; //平均数
int sum=0; //所有数字之和
Scanner input = new Scanner(System.in);
System.out.println("请输入你要处理的数字的个数：");
int n = input.nextInt();
int[] arr = new int[n]; //定义一个n位的数组
System.out.println("请输入你要处理的数字：");
for(x = 0; x< n;x++){
System.out.print("第"+(x+1)+"个数字：");
arr[x] = input.nextInt();
}

double maximum=arr[0];
for (int i=1;i<arr.length;i++) {
	if (arr[i]>maximum) maximum=arr [i];
}
System.out.println("最大值是"+ maximum);

double minimum=arr[0];
for (int i=1;i<arr.length;i++) {
	if (arr[i]<minimum) minimum=arr [i];
}
System.out.println("最大值是"+ minimum);

for(n = 0;n<arr.length;n++){
sum += arr[n]; //累加
}
avg = sum/n;
System.out.println("平均数是："+avg);
System.out.println("元素的个数是"+arr.length);

}
}




