    this.insert=function(head,data){
          //complete this method
        if(!head) return new Node(data);
        let tmp = head;
        while(tmp.next){
            tmp = tmp.next;
        }
        tmp.next = new Node(data);
        return head;
    };
