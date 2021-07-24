import React, { Component } from 'react'
import { Tab, Container, Row, Col, Nav } from 'react-bootstrap'
import Chel from '../Components/chel.jpg'
import Free from '../Components/free.gif'
import '../Components/joe.css'
import Mine from '../Components/mine.jpg'
import JavaS from '../Components/javas.jpg'

export default class second extends Component {
    render() {
        return (
         <Container>
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">sdyaik</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Vjb</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><h1> </h1></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="foufth"><h1> </h1></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <a href="https://www.google.com/search?q=rjncz&tbm=isch&ved=2ahUKEwiournBn-fxAhWGuyoKHY0qBEsQ2-cCegQIABAA&oq=rjncz&gs_lcp=CgNpbWcQAzIECCMQJzoFCAAQsQM6AggAOgYIABAKEAE6CAgAEAoQARAYOgQIABABUMMmWMVBYKVCaApwAHgAgAFbiAHgBZIBATmYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=Mk3xYKjZGIb3qgGN1ZDYBA&bih=937&biw=1920#imgrc=uauruFbgqSzs3M" target="_blank" >
                                <img class="chel"
                                src={Chel}
                                />
                            </a>
                                <h1>Ghbfn</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img class="cod"
                                src={JavaS}
                                />
                                <h1>Я занимаюсь програмированием на javascript больше года.</h1>
                                <a href="https://github.com/strigcs/1" target="_blank"><h1>Моё портфолио</h1></a>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <a class="ay" href="https://www.minecraft.net/ru-ru" target="_blank" >
                                <img class="mien"
                                src={Mine}
                                />
                            </a>
                                <a href="https://www.minecraft.net/ru-ru" target="_blank"><h1 class="ah2">https://www.minecraft.net/ru-ru</h1></a>
                            </Tab.Pane>
                            <Tab.Pane eventKey="foufth">
                            <a class="yt" href="https://rutracker.org/forum/index.php"  target="_blank">
                                <img class="frea"
                                src={Free}
                                />
                                </a>
                                <p>RuTracker.org (ранее — Torrents.ru) — крупнейший[3] русскоязычный BitTorrent-трекер, насчитывающий почти 15,8 миллиона зарегистрированных учётных записей. На трекере зарегистрировано более 2,06 миллиона раздач (из которых более 1,92 миллиона — «живых»), суммарный размер которых составляет 4,318 петабайта[4] (по состоянию на 15 апреля 2021 года). Доменное имя — rutracker.org, в России входит в список запрещённых сайтов после решения Мосгорсуда. Суд принял решение о блокировке торрент-трекера 4 декабря 2015 года по объединённому иску издательств «Эксмо» и «С. Б. А. Продакшн», которое является дочерним предприятием звукозаписывающей компании Warner Music Russia.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
             </Tab.Container>
         </Container>
        )
    }
}
