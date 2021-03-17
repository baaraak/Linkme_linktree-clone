/**
 *
 * @param {Array} list List of links
 * @param {Number} startIndex the index from start dragging
 * @param {Number} endIndex the index drop
 * @returns Array on new sorted links by index
 */
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result.map((l, i) => ({ ...l, index: i }));
};

// Load external scripts url
export const loadScript = (src) => {
  return new Promise(function (resolve, reject) {
    const s = document.createElement('script');
    let r = false;
    s.type = 'text/javascript';
    s.src = src;
    s.async = true;
    s.onerror = function (err) {
      reject(err, s);
    };
    s.onload = s.onreadystatechange = function () {
      // console.log(this.readyState); // uncomment this line to see which ready states are called.
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        resolve();
      }
    };
    const t = document.getElementsByTagName('script')[0];
    t.parentElement.insertBefore(s, t);
  });
};

// Copy text input to user clipboard
export const copyToClipboard = (text) => {
  const el = document.createElement('input');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

// Generate site url from username
export const generateSiteUrl = (username) => {
  return `${window.location.origin}/${username}`;
};
