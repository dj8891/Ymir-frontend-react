Ymir is an embeddable project built with ReactJS and TypeScript, located at `/ymir`.

## Getting Started Stand Alone

To get started with Ymir, follow the steps below:

1. Clone the repository to your local machine:
   ```bash
   git clone https://gitlab.com/la-holding/ymir-frontend-react.git
   cd ymir-frontend-react
   ```
2. Install the dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Getting Started with Rollup bundler

To get started with Rollup bundler, follow the steps below:

1. Clone the repository to your local machine:
   ```bash
   git clone https://gitlab.com/la-holding/ymir-frontend-react.git
   cd ymir-frontend-react
   ```
2. Install the dependencies:

   ```
   npm install
   ```

3. Start the Rollup dev server:
   ```
   NODE_ENV=development npx rollup -c
   ```
4. Embed using iframe

   ```
   <iframe
       src="http://localhost:{Rollup_Server_Port}?appId=327823723782387"
       width="500"
       height="800"
       frameborder="0"
       ></iframe>
   ```

5. Embed using javascript

   ```
    <script>
      window.myAppConfig = {
        appId: "Test_8777823",
      };
      function createWidgetDiv() {
        const div = document.createElement("div");
        div.className = "ymir-widget";
        document.body.appendChild(div);
      }
      function loadScript(src) {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
      }
      createWidgetDiv();
      loadScript("http://localhost:{Rollup_Server_Port}/index.bundle.js");
    </script>

   ```
