window.onload = function () {
// 1. select top most element
// 2. traverse through the whole DOM
// 3. count each time an attribute or element is called
// 4. 

// .attributes gives you atributes list
// .children gives you array like list of nested children

// create var to access HTML to begin traversing
var rootElement = document.documentElement;

function wordCloud (element) {
  // obj var
  var topWordsObj = {}; //!valueObj[currentAttributeName]

  // var for child nodes
  var children = element.children;

  // grab element to append results
  // var domCloud = document.getElementById('dom_cloud_container');

  // create base case so you can eventually exit out
  if (!children) {
    return;
  }

  // create attribute and count if attribute exists
  if (element.attributes) {
    // var newAttributeName = document.createElement('span');
    var currentAttributeCount = 0;
    var attributeCount = 0;

    for (var i = 0; i < element.attributes.length; i++) {
      var currentAttributeName = element.attributes[i];
      console.log(currentAttributeName);
      if (!currentAttributeName) {
        topWordsObj[currentAttributeName] = attributeCount++;
      }
      topWordsObj[currentAttributeName] = attributeCount++;
      console.log(topWordsObj);

      // currentAttributeCount++;
      // attributeCount = currentAttributeCount;
      // console.log(attributeCount);
      // newAttributeName.innerHTML = currentAttributeName + ': ' + attributeCount; // style: 1;
    }

    // domCloud.appendChild(newAttributeName);
  }

  // creating new element for current element tag name
  var newElementName = element.tagName;
  // var newElement = document.createElement('p');
  var currentElementCount = 0;
  var elementCount = 0;

  // checking if element tag name doesnt exist
  if(!newElementName) {
    currentElementCount++;
    elementCount = currentElementCount;
    // newElement.innerHTML = newElementName + ': ' + elementCount;
  } else {
    elementCount++;
  }



  // if there are child nodes, drill down
  for (var k = 0; k < children.length; k++) {
    var child = children[k];

    if (child.children) {
    wordCloud(child);
    }
  }
  
  // append element to domCloud
  // domCloud.appendChild(newElement);

  // document.body.appendChild(domCloud);
}

wordCloud(rootElement);
};