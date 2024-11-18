<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active me-2 py-2">
              <RouterLink to="/" class="text-light text-decoration-none"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item me-2 py-2">
              <RouterLink to="/about" class="text-light text-decoration-none"
                >About</RouterLink
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cours
              </a>
              <ul class="dropdown-menu bg-dark hover:bg-primary">
                <li class="dropdown-item me-2">
                  <RouterLink
                    to="/component-comm-emit"
                    class="text-light text-decoration-none"
                    >Compponent Comm Emit</RouterLink
                  >
                </li>
                <li class="dropdown-item me-2">
                  <RouterLink
                    to="/component-comm-props"
                    class="text-light text-decoration-none"
                    >Component Comm Props</RouterLink
                  >
                </li>
                <li class="dropdown-item me-2">
                  <RouterLink
                    to="/creation-component"
                    class="text-light text-decoration-none"
                    >Creation Component</RouterLink
                  >
                </li>
                <li class="dropdown-item me-2">
                  <RouterLink
                    to="/presention-view"
                    class="text-light text-decoration-none"
                    >Presentation View</RouterLink
                  >
                </li>
                <li class="dropdown-item me-2">
                  <RouterLink
                    to="/system-component"
                    class="text-light text-decoration-none"
                    >System Component</RouterLink
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
