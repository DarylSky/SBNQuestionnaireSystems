<HTML>
  <HEAD>
    <TITLE>Passing Arrays In Jsp Methods</TITLE>
  </HEAD>
<BODY>
<table border="1" cellpadding="0" cellspacing="0" width="60%" align="center">
    <tr><td>
        <font  size="6" color ="#000080">Passing Arrays In Jsp Methods</font><br>
    <%!
    void Addition(int [] a)
    {
        for (int i = 0; i < a.length;i++) {
            a[ i ] += 2;
        }
    }
    %>
</td></tr>
<tr><td>
    <%
        int array[] = {2, 4 , 3, 6, 8};
               out.println("Before the call to Addition...<BR>");
        for (int i = 0; i < array.length; i++) {
            out.println("array[" + i + "] = " + array[i] + "<BR>");
        }
        Addition(array);
        out.println("After the call to Addition...<BR>");
        for (int i = 0; i < array.length; i++) {
            out.println("array[" + i + "] = " +
                array[i] + "<BR>");
        }
    %></td>
        </tr>
        </table>
  </BODY>
</HTML>