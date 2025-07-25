/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
       ListNode dummy = new ListNode(0);
       dummy.next = head;

       int size = 0;
       ListNode temp = head;
       while(temp != null) {
        temp = temp.next;
        size++;
       }

       int i = 0; 
       ListNode prev = dummy;
       while(i < size - n) {
        prev = prev.next;
        i++;
       }
       prev.next = prev.next.next;

       return dummy.next;
    }
}