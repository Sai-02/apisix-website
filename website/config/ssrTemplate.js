module.exports = {
  ssrTemplate: `<!DOCTYPE html>
  <html <%~ it.htmlAttributes %>>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="ahrefs-site-verification" content="c2f7370ecf46173f4fb25f114e74c97e0a2976d4f02f61c9b00a9d7d34e34698">
      <meta name="generator" content="Docusaurus v<%= it.version %>">
      <% if (it.noIndex) { %>
        <meta name="robots" content="noindex, nofollow" />
      <% } %>
      <%~ it.headTags %>
      <% it.metaAttributes.forEach((metaAttribute) => { %>
        <%~ metaAttribute %>
      <% }); %>
      <% it.stylesheets.forEach((stylesheet) => { %>
        <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
      <% }); %>
      <% it.scripts.forEach((script) => { %>
        <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
      <% }); %>
    </head>
    <body <%~ it.bodyAttributes %>>
      <%~ it.preBodyTags %>
      <div id="__docusaurus">
        <%~ it.appHtml %>
      </div>
      <% it.scripts.forEach((script) => { %>
        <script src="<%= it.baseUrl %><%= script %>"></script>
      <% }); %>
      <%~ it.postBodyTags %>
    </body>
    <script>
      window.onload = function() {
        if (window.location.host.endsWith(".netlify.app")) {
          var dom = document.querySelector("#__docusaurus");
          dom.insertAdjacentHTML('afterend', '<div style="text-align: right;padding: 48px 32px 48px 0;">This site is powered by <a href="https://www.netlify.com/" target="_blank">Netlify</a></div>');
        }
      }
    </script>
  </html>`,
};
