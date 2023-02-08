
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function HomeComponent() {
    const [nodes, setNodes] = useState([{ id: uuidv4(), parentId: null }]);
    const [nodeValues, setNodeValues] = useState({});

    const handleAddNode = (id) => {
        setNodes([...nodes, { id: uuidv4(), parentId: id }]);
    };

    const handleChange = (event, id) => {
        setNodeValues({ ...nodeValues, [id]: event.target.value });
    };

    const handleSave = () => {
        const hierarchy = [];
        nodes.forEach((node) => {
            if (!node.parentId) {
                hierarchy.push({
                    id: node.id,
                    value: nodeValues[node.id],
                    children: [],
                });
            }
        });

        const addChildren = (children, parentId, nodes) => {
            nodes.forEach((node) => {
                if (node.parentId === parentId) {
                    children.push({
                        id: node.id,
                        value: nodeValues[node.id],
                        children: [],
                    });
                    addChildren(children[children.length - 1].children, node.id, nodes);
                }
            });
        };
        hierarchy.forEach((node) => {
            addChildren(node.children, node.id, nodes);
        });

        console.log(hierarchy);
    };

    const getNodeLevel = (id, nodes) => {
        const node = nodes.find((n) => n.id === id);
        return node.parentId ? 1 + getNodeLevel(node.parentId, nodes) : 0;
    };

    return (
        <form>
            {nodes.map((node) => (
                <div
                    key={node.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        marginLeft: getNodeLevel(node.id, nodes) * 32 + 32,
                    }}>
                    <TextField
                        onChange={(event) => handleChange(event, node.id)}
                        value={nodeValues[node.id] || ''}
                        placeholder={node.parentId ? '' : 'Root node placeholder'}
                    />
                    <Button onClick={() => handleAddNode(node.id)}>Add Child</Button>
                </div>
            ))}
            <Button onClick={handleSave}>Save</Button>
        </form>
    );
}

export default HomeComponent;