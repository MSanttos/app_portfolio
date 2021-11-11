create table portfolio(
  id_portfolio integer not null auto_increment,
  descricao varchar(255) not null,
  detalhes text(255) not null,
  primary key(id_portfolio);
)