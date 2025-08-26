<div class="markdown-content-638ca2715b41522e8a2e3771"><h2 id="h2-problem-statement" level="2">Problem Statement</h2>
<p>Given an array of numbers sorted in ascending order and a target sum, find a <strong>pair in the array whose sum is equal to the given target</strong>.</p>
<p>Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].</p>
<p><strong>Example 1</strong>:</p>
<pre><code>Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
</code></pre>
<p><strong>Example 2</strong>:</p>
<pre><code>Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
</code></pre>
<p><strong>Constraints:</strong></p>
<ul>
<li>2 &lt;= arr.length &lt;= 10<sup>4</sup></li>
<li>-10<sup>9</sup> &lt;= arr[i] &lt;= 10<sup>9</sup></li>
<li>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></li>
<li>Only <code>one</code> valid answer exists.</li>
</ul></div>
