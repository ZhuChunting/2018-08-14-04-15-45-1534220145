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



��ҵ2
package array;

import java.util.Scanner;
public class ComputeArray {
public static void main(String[] args){
int x=0;
double avg; //ƽ����
int sum=0; //��������֮��
Scanner input = new Scanner(System.in);
System.out.println("��������Ҫ��������ֵĸ�����");
int n = input.nextInt();
int[] arr = new int[n]; //����һ��nλ������
System.out.println("��������Ҫ��������֣�");
for(x = 0; x< n;x++){
System.out.print("��"+(x+1)+"�����֣�");
arr[x] = input.nextInt();
}

double maximum=arr[0];
for (int i=1;i<arr.length;i++) {
	if (arr[i]>maximum) maximum=arr [i];
}
System.out.println("���ֵ��"+ maximum);

double minimum=arr[0];
for (int i=1;i<arr.length;i++) {
	if (arr[i]<minimum) minimum=arr [i];
}
System.out.println("���ֵ��"+ minimum);

for(n = 0;n<arr.length;n++){
sum += arr[n]; //�ۼ�
}
avg = sum/n;
System.out.println("ƽ�����ǣ�"+avg);
System.out.println("Ԫ�صĸ�����"+arr.length);

}
}




