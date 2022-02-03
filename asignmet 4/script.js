var names = new Array();
names[0]="yamini";
names[1]="john";
names[2]="ashok";
names[3]="srinu";
names[4]="rama";
names[5]="arjun";
names[6]="mahesh";
names[7]="jim";
names[8]="yash";
//console.log(names[0].charAt(0));
for(var i = 0;i < names.length; i++)
{
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j')
    {
        console.log("Goodbye "+ names[i])
    }
    else
    {
        console.log("Hello " + names[i])
    }
}
