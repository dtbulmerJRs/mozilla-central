/* -*- Mode: Java -*-
 * The contents of this file are subject to the Mozilla Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/MPL/
 * 
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 * 
 * The Original Code is Mozilla Communicator.
 * 
 * The Initial Developer of the Original Code is Netscape
 * Communications Corp. Portions created by Netscape Communications
 * Corp. are Copyright (C) 1999 Netscape Communications Corp. All
 * Rights Reserved.
 * 
 * Contributor(s): Stephen Lamm <slamm@netscape.com>
 */ 

function Init()
{
  var panel_name_div  = document.getElementById('panelname');
  var customize_frame = document.getElementById('customizeframe');
  var panel_text      = document.createTextNode(panel_name)
  panel_name_div.appendChild(panel_text);
  // The customize page currently is not loading because of a redirect bug.
  customize_frame.setAttribute('src', panel_customize_URL);
}
