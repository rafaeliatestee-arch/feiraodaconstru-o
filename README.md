# Feirão da Construção — vitrine demonstrativa

Primeira etapa: storefront responsivo com catálogo, filtros, favoritos, carrinho persistido no navegador e orçamento via WhatsApp. **Não é um e-commerce em produção.** Produtos, imagens, preços e estoques são demonstrativos. Login, estoque real, checkout e administração ainda não estão implementados.

## Executar

```bash
npm install
npm run dev
npm run build
```

## Próxima etapa

Integrar Supabase Auth e tabelas com RLS para `profiles`, `roles`, `categories`, `products`, `product_images`, `collections`, `collection_products`, `banners`, `orders`, `order_items`, `store_settings`. O layout da home deverá ser configurado por seções ordenáveis persistidas em banco. Nunca conceder admin com base em metadados editáveis pelo usuário. Configurar credenciais somente em variáveis de ambiente e nunca publicar service role.

Projeto Supabase existente: `kqzhfhmyxfqoewefcbar`. Não foi alterado nesta etapa.
