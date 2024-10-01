#include<iostream>
using namespace std;
int main(){
	int sales = 95000;
	int service = 4;
	int county = 2;
	float serive_sales = ((sales * service)/100);
       	float county_sales = (sales * county)/100;
	cout<<"service_tax = "<<serive_sales <<endl
	<<"county_tax = "<<county_sales;
	return 0;
}

