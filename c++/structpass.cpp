#include<iostream>
using namespace std;

struct car{
	string model;
	int year;
	string showroom;
};
void truck1(car truck);

int main(){
	car car1;
	car1.model="audi";
	car1.year=2001;
	car1.showroom="knr";

	paintcar(car,"silver")
	cout<<car1.model<<endl;
	cout<<car1.year<<endl;;
	cout<<car1.showroom<<endl;;

	car truck;
	truck.model="lorry";
	truck.year=2010;
	truck.showroom="hyd";

	truck1(truck);

	return 0;

}
void truck1(car truck){
	cout<<truck.model<<endl;;
	cout<<truck.year<<endl;;
	cout<<truck.showroom<<endl;;
}
void paintcar(car &car1){
	car.color=color;
}
