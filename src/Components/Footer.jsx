export default function Footer() {
  return (
    <footer className="bg-secondary text-center">
      <div className="container p-4">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#010409" }}
            href="#!"
            role="button"
          >
            Email
          </a>

          <a
            className="btn btn-primary btn-floating"
            style={{ backgroundColor: "#010409" }}
            href="https://ejemplo.com"
            rel="noopener noreferrer"
            role="button"
          >
            Contact
          </a>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a
          className="text-dark"
          href="https://mdbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
