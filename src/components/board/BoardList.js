import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import deleteContent from '../../api/boardApi';

const BoardList = ({contents}) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th colSpan="5" className="text-right">
                    <Link to="/write" className="btn btn-primary">
                        글 쓰기
                    </Link>
                    </th>
                </tr>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>{" "}</th>
                </tr>
            </thead>
            <tbody>
                {contents.map(content =>
                    <tr key={content.id}>
                        <td>{content.id}</td>
                        <td>
                            <Link to={'/board/' + content.id}>{content.title}</Link>
                        </td>
                        <td>{content.author}</td>
                        <td>{content.date}</td>
                        <td>
                            <input
                                id={content.id}
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteContent(content.id)}
                                defaultValue="글 삭제"
                            />
                        </td>
                    </tr>
                        )}
            </tbody>
        </table>
    )
}

BoardList.propTypes = {
    contents: PropTypes.array.isRequired
}

export default BoardList;