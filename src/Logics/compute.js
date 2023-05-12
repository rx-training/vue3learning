export function findAverage(obj)
{
   // obj.Hindi+obj.Math+obj.English;
    return (obj.Hindi+obj.Math+obj.English)/3;

}
export function Grade(obj)
{
  let total=  (obj.Hindi+obj.Math+obj.English)/3;
  if(total>=90)
  {
    return 'A';
    }
    else if(total>=80 &&total<90)
    {
        return 'B';
    }
    else if(total>=50 && total<80)
    {
        return 'C';
    }
    else
    {
        return 'D';
    }
}

