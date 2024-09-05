
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let tempNode: ListNode | null = l1;
    let tempNodeValues: string = tempNode?.val + '';
    while(tempNode?.next){
        tempNode = tempNode.next;
        tempNodeValues += tempNode.val + '';
    }
    let tempNodeValuesInt: number = Number(reverseString(tempNodeValues));
    let tempNode2: ListNode | null = l2;
    let tempNodeValues2: string = tempNode2?.val + '';
    while(tempNode2?.next){
        tempNode2 = tempNode2.next;
        tempNodeValues2 += tempNode2.val + '';
    }

    let tempNodeValuesInt2: number = Number(reverseString(tempNodeValues2));

    let sumOfNodesValues: number = tempNodeValuesInt + tempNodeValuesInt2;

    let reversedSum: string = reverseString(sumOfNodesValues + '');
    let finalValues: string[] = reversedSum.split('');

    console.log(finalValues)
    let count: number = 0;
    let finalNode: ListNode | null = l2;
    while(finalNode?.next){
        finalNode.val = +finalValues[count]
        finalNode = finalNode.next;
        count++;

    }
    return l2;

}



function reverseString(str: string) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }
    return newString;
}
