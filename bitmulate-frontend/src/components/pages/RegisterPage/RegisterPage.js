import React, { Component } from 'react'
import { 
    PageTemplate, 
    RegisterTemplate, 
    PolyBackground, 
    Paper, 
    SectionWithTitle,
    Input,
    SelectCurrency
} from '../../../components'
import { HeaderContainer } from '../../../containers'
import styles from './RegisterPage.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class RegisterPage extends Component {
    state = {
        half: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                half: true
            })
        })
    }

    render() {
        const { half } = this.state
        return (
            <PageTemplate
                header={<HeaderContainer/>}>
                <PolyBackground fixed half={half}>
                </PolyBackground>
                <Paper>
                    <RegisterTemplate>
                        <SectionWithTitle title="닉네임" description="사용하실 닉네임을 입력하세요.">
                            <Input/>
                        </SectionWithTitle>
                        <SectionWithTitle title="초기자금 설정">
                            <div className={cx('description')}>
                                모의 거래소에서 사용할 초기자금을 설정하세요. {"\r\n"}초기 자금은 언제든지 설정페이지에서 초기화할 수 있습니다.
                            </div>
                            <h4>
                                화폐 선택
                            </h4>
                            <SelectCurrency/>
                        </SectionWithTitle>
                    </RegisterTemplate>
                </Paper>
            </PageTemplate>
        )
    }
}

export default RegisterPage