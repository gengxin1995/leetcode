链表是线性表的⼀种,线性表中数据元素之间的关系是⼀对⼀的关系， 即除了第⼀个和最后⼀个数据元素之外，其它数据元素都是⾸尾相接的。
线性表存储方式： 
* 顺序存储 \
访问⼀个元素的时间复杂度是O(1)
* 链式存储 \
定点插⼊和定点删除的时间复杂度为O(1)，访问的时间复杂度最坏为 O(n)

链表分类：
* 单项链表
* 双向链表
* 循环链表

链表操作时的鲁棒性问题主要包含两个情况：
* 当访问链表中某个节点`curt.next`时，⼀定要先判断`curt`是否为`null`。
* 全部操作结束后，判断是否有环；若有环，则置其中⼀端为`null`。

**快慢指针**

快慢指针中的快慢指的是指针向前移动的步⻓，每次移动的步⻓较⼤即为快，步⻓较⼩即为慢， 常⽤的快慢指针⼀般是在单链表中让快指针每次向前移动2，慢指针则每次向前移动1。

快慢指针在链表相关问题中主要有两个应⽤：
* 快速找出未知⻓度单链表的中间节点。设置两个指针`*fast`、`*slow`都指向单链表的头节点，其中`*fast`的移动速度是`*slow`的2倍， 当`*fast`指向末尾节点的时候，`slow`正好就在中间了。
* 判断单链表是否有环利⽤快慢指针的原理。同样设置两个指针`*fast`、`*slow`都指向单链表的头节点，其中`*fast` 的移动速度是`*slow`的2倍。 \
如果`*fast = NULL`，说明该单链表以`NULL`结尾，不是循环链表；如果`*fast = *slow`，则快指针追上慢指针，说明该链表是循环链表。








