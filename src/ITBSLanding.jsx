
import React from "react";

export default function ITBSLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">IT</div>
            <div>
              <div className="text-lg font-semibold">ITBS LTDA.</div>
              <div className="text-xs text-gray-500">Redes e internet</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-green-600">Sobre</a>
            <a href="#solutions" className="hover:text-green-600">Soluções</a>
            <a href="#coverage" className="hover:text-green-600">Cobertura</a>
            <a href="#projects" className="hover:text-green-600">Projetos</a>
            <a href="#team" className="hover:text-green-600">Equipe</a>
            <a href="#contact" className="hover:text-green-600">Contato</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 bg-green-600 text-white rounded-md text-sm">Solicitar Proposta</a>
        </div>
      </header>

      <section className="bg-gradient-to-r from-white to-green-50">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Conectividade de alta performance para transformar escolas e empresas no Nordeste</h1>
            <p className="mt-4 text-lg text-gray-700">Infraestrutura robusta, rede própria e equipe técnica especializada para oferecer internet estável, segura e escalável.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 bg-green-600 text-white rounded-md font-medium">Seja nosso parceiro</a>
              <a href="#projects" className="px-5 py-3 border rounded-md text-gray-700">Ver projetos</a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-64 md:h-80 rounded-xl shadow-md bg-gradient-to-tr from-green-100 to-white flex items-center justify-center">
              <div className="text-green-700 font-semibold">[Imagem de Conectividade]</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold">Sobre a ITBS LTDA.</h2>
        <p className="mt-4 text-gray-700">A ITBS LTDA. oferece soluções de conectividade terceirizada com foco em desempenho, segurança e operação eficiente.</p>
      </section>

      <section id="solutions" className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Nossas Soluções</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">Conectividade terceirizada</div>
            <div className="p-6 bg-white rounded-lg shadow-sm">Internet dedicada para Escolas</div>
            <div className="p-6 bg-white rounded-lg shadow-sm">Suporte Técnico Especializado</div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold">Contato</h2>
        <form className="mt-6 grid gap-3 max-w-lg">
          <input className="border rounded-md px-3 py-2" placeholder="Nome" />
          <input className="border rounded-md px-3 py-2" placeholder="Email" />
          <textarea className="border rounded-md px-3 py-2" rows={4} placeholder="Mensagem"></textarea>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Enviar</button>
        </form>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        © {new Date().getFullYear()} ITBS LTDA. — Redes e internet
      </footer>
    </div>
  );
}
