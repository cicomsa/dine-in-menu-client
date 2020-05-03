import Document from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => App
      })

    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument